"use client";
import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  if (typeof localStorage === "undefined") {
    return initialValue;
  }

  const savedValue = localStorage.getItem(key);

  if (savedValue === null) {
    return initialValue;
  }

  try {
    const parsedValue = JSON.parse(savedValue);

    if (parsedValue !== null && Array.isArray(parsedValue)) {
      return parsedValue;
    }

    if (initialValue instanceof Function) {
      return initialValue();
    }

    return initialValue;
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return initialValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const setStoredValue = (newValue) => {
    setValue((prevValue) => {
      const updatedValue =
        typeof newValue === "function" ? newValue(prevValue) : newValue;
      if (Array.isArray(prevValue)) {
        if (prevValue.includes(updatedValue)) {
          const confirmRemove = window.confirm(
            "Item already exists. Do you want to remove it?"
          );
          if (confirmRemove) {
            const filteredArray = prevValue.filter(
              (item) => item !== updatedValue
            );
            localStorage.setItem(key, JSON.stringify(filteredArray));
            return filteredArray;
          } else {
            return prevValue;
          }
        } else {
          const newArray = [...prevValue, updatedValue];
          localStorage.setItem(key, JSON.stringify(newArray));
          return newArray;
        }
      } else {
        const newArray = [updatedValue];
        localStorage.setItem(key, JSON.stringify(newArray));
        return newArray;
      }
    });
  };

  return [value, setStoredValue];
}
