"use client";

import React, { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";
import Ads from "../ads";
interface Mapping {
  [key: string]: string;
}

const boldLines: Mapping = {
  0: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  1: `────────────
─████████───
─██░░░░██───
─████░░██───
───██░░██───
───██░░██───
───██░░██───
───██░░██───
───██░░██───
─████░░████─
─██░░░░░░██─
─██████████─
────────────`,
  2: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─██████████░░██─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  3: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─██████████░░██─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─██████████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  4: `────────────────
─██████──██████─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██████─
────────────────`,
  5: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─██████████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  6: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  7: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██████─
────────────────`,
  8: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  9: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─██████████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  A: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██████──██████─
────────────────`,
  B: `──────────────────
─██████████████───
─██░░░░░░░░░░██───
─██░░██████░░██───
─██░░██──██░░██───
─██░░██████░░████─
─██░░░░░░░░░░░░██─
─██░░████████░░██─
─██░░██────██░░██─
─██░░████████░░██─
─██░░░░░░░░░░░░██─
─████████████████─
──────────────────`,
  C: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  D: `────────────────
─████████████───
─██░░░░░░░░████─
─██░░████░░░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░████░░░░██─
─██░░░░░░░░████─
─████████████───
────────────────`,
  E: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  F: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██████─────────
────────────────`,
  G: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██─────────
─██░░██──██████─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  H: `─────────────────
─██████──────────
─██░░██████████──
─██░░░░░░░░░░██──
─██░░██████░░██──
─██░░██──██░░██──
─██░░██──██░░██──
─██░░██──██░░██──
─██░░██──██░░██──
─██░░██──██░░██──
─██░░██──██░░██──
─██████──██████──
─────────────────`,
  I: `────────────
─██████████─
─██░░░░░░██─
─████░░████─
───██░░██───
───██░░██───
───██░░██───
───██░░██───
───██░░██───
─████░░████─
─██░░░░░░██─
─██████████─
────────────`,
  J: `────────────────
─────────██████─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─────────██░░██─
─██████──██░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  K: `──────────────────
─██████──████████─
─██░░██──██░░░░██─
─██░░██──██░░████─
─██░░██──██░░██───
─██░░██████░░██───
─██░░░░░░░░░░██───
─██░░██████░░██───
─██░░██──██░░██───
─██░░██──██░░████─
─██░░██──██░░░░██─
─██████──████████─
──────────────────`,
  L: `────────────────
─██████─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  M: `────────────────────────
─██████──────────██████─
─██░░██████████████░░██─
─██░░░░░░░░░░░░░░░░░░██─
─██░░██████░░██████░░██─
─██░░██──██░░██──██░░██─
─██░░██──██░░██──██░░██─
─██░░██──██████──██░░██─
─██░░██──────────██░░██─
─██░░██──────────██░░██─
─██░░██──────────██░░██─
─██████──────────██████─
────────────────────────`,
  N: `────────────────────────
─███████────────██████─
─██░░██░█───────██░░██─
─██░░███░█──────██░░██─
─██░░████░█─────██░░██─
─██░░██─██░█────██░░██─
─██░░██──██░█───██░░██─
─██░░██───██░█──██░░██─
─██░░██────██░█─██░░██─
─██░░██─────██░███░░██─
─██░░██──────██░██░░██─
─██████───────████████─
────────────────────────`,
  O: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  P: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██████─────────
────────────────`,
  Q: `──────────────────
─██████████████───
─██░░░░░░░░░░██───
─██░░██████░░██───
─██░░██──██░░██───
─██░░██──██░░██───
─██░░██──██░░██───
─██░░██──██░░██───
─██░░██──██░░██───
─██░░██████░░████─
─██░░░░░░░░░░░░██─
─████████████████─
──────────────────`,
  R: `────────────────────
─████████████████───
─██░░░░░░░░░░░░██───
─██░░████████░░██───
─██░░██────██░░██───
─██░░████████░░██───
─██░░░░░░░░░░░░██───
─██░░██████░░████───
─██░░██──██░░██─────
─██░░██──██░░██████─
─██░░██──██░░░░░░██─
─██████──██████████─
────────────────────`,
  S: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████░░██─
─────────██░░██─
─██████████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
  T: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██████░░██████─
─────██░░██─────
─────██░░██─────
─────██░░██─────
─────██░░██─────
─────██░░██─────
─────██░░██─────
─────██░░██─────
─────██████─────
────────────────`,
  U: `────────────────
─██████──██████─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─`,
  V: `────────────────
─██████──██████─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░░░██░░░░██─
─████░░░░░░████─
───████░░████───
─────██████─────
────────────────`,
  W: `────────────────────────
─██████──────────██████─
─██░░██──────────██░░██─
─██░░██──────────██░░██─
─██░░██──────────██░░██─
─██░░██──██████──██░░██─
─██░░██──██░░██──██░░██─
─██░░██──██░░██──██░░██─
─██░░██████░░██████░░██─
─██░░░░░░░░░░░░░░░░░░██─
─██░░██████░░██████░░██─
─██████──██████──██████─
────────────────────────`,
  X: `────────────────────
─████████──████████─
─██░░░░██──██░░░░██─
─████░░██──██░░████─
───██░░░░██░░░░██───
───████░░░░░░████───
─────██░░░░░░██─────
───████░░░░░░████───
───██░░░░██░░░░██───
─████░░██──██░░████─
─██░░░░██──██░░░░██─
─████████──████████─
────────────────────`,
  Y: `────────────────────
─████████──████████─
─██░░░░██──██░░░░██─
─████░░██──██░░████─
───██░░░░██░░░░██───
───████░░░░░░████───
─────████░░████─────
───────██░░██───────
───────██░░██───────
───────██░░██───────
───────██░░██───────
───────██████───────
────────────────────`,
  Z: `────────────────────
─██████████████████─
─██░░░░░░░░░░░░░░██─
─████████████░░░░██─
─────────████░░████─
───────████░░████───
───████░░████───────
─████░░████─────────
─██░░░░████████████─
─██░░░░░░░░░░░░░░██─
─██████████████████─
────────────────────`,
};

const boldBlocks = {
  0: `
░█████╗░
██╔══██╗
██║░░██║
██║░░██║
╚█████╔╝
░╚════╝░`,

  1: `
░░███╗░░
░████║░░
██╔██║░░
╚═╝██║░░
███████╗
╚══════╝`,

  2: `
██████╗░
╚════██╗
░░███╔═╝
██╔══╝░░
███████╗
╚══════╝`,

  3: `
██████╗░
╚════██╗
░█████╔╝
░╚═══██╗
██████╔╝
╚═════╝░`,

  4: `
░░██╗██╗
░██╔╝██║
██╔╝░██║
███████║
╚════██║
░░░░░╚═╝`,

  5: `
███████╗
██╔════╝
██████╗░
╚════██╗
██████╔╝
╚═════╝░`,

  6: `
░█████╗░
██╔═══╝░
██████╗░
██╔══██╗
╚█████╔╝
░╚════╝░`,

  7: `
███████╗
╚════██║
░░░░██╔╝
░░░██╔╝░
░░██╔╝░░
░░╚═╝░░░`,

  8: `
░█████╗░
██╔══██╗
╚█████╔╝
██╔══██╗
╚█████╔╝
░╚════╝░`,

  9: `
░█████╗░
██╔══██╗
╚██████║
░╚═══██║
░█████╔╝
░╚════╝░`,

  A: `
░█████╗░
██╔══██╗
███████║
██╔══██║
██║░░██║
╚═╝░░╚═╝`,

  B: `
██████╗░
██╔══██╗
██████╦╝
██╔══██╗
██████╦╝
╚═════╝░`,

  C: `
░█████╗░
██╔══██╗
██║░░╚═╝
██║░░██╗
╚█████╔╝
░╚════╝░`,

  D: `
██████╗░
██╔══██╗
██║░░██║
██║░░██║
██████╔╝
╚═════╝░`,

  E: `
███████╗
██╔════╝
█████╗░░
██╔══╝░░
███████╗
╚══════╝`,

  F: `
███████╗
██╔════╝
█████╗░░
██╔══╝░░
██║░░░░░
╚═╝░░░░░`,

  G: `
░██████╗░
██╔════╝░
██║░░██╗░
██║░░╚██╗
╚██████╔╝
░╚═════╝░`,

  H: `
██╗░░██╗
██║░░██║
███████║
██╔══██║
██║░░██║
╚═╝░░╚═╝`,

  I: `
██╗
██║
██║
██║
██║
╚═╝`,

  J: `
░░░░░██╗
░░░░░██║
░░░░░██║
██╗░░██║
╚█████╔╝
░╚════╝░`,

  K: `
██╗░░██╗
██║░██╔╝
█████═╝░
██╔═██╗░
██║░╚██╗
╚═╝░░╚═╝`,

  L: `
██╗░░░░░
██║░░░░░
██║░░░░░
██║░░░░░
███████╗
╚══════╝`,

  M: `
███╗░░░███╗
████╗░████║
██╔████╔██║
██║╚██╔╝██║
██║░╚═╝░██║
╚═╝░░░░░╚═╝`,

  N: `
███╗░░██╗
████╗░██║
██╔██╗██║
██║╚████║
██║░╚███║
╚═╝░░╚══╝`,

  O: `
░█████╗░
██╔══██╗
██║░░██║
██║░░██║
╚█████╔╝
░╚════╝░`,

  P: `
██████╗░
██╔══██╗
██████╔╝
██╔═══╝░
██║░░░░░
╚═╝░░░░░`,

  Q: `
░██████╗░
██╔═══██╗
██║██╗██║
╚██████╔╝
░╚═██╔═╝░
░░░╚═╝░░░`,

  R: `
██████╗░
██╔══██╗
██████╔╝
██╔══██╗
██║░░██║
╚═╝░░╚═╝`,

  S: `
░██████╗
██╔════╝
╚█████╗░
░╚═══██╗
██████╔╝
╚═════╝░`,

  T: `
████████╗
╚══██╔══╝
░░░██║░░░
░░░██║░░░
░░░██║░░░
░░░╚═╝░░░`,

  U: `
██╗░░░██╗
██║░░░██║
██║░░░██║
██║░░░██║
╚██████╔╝
░╚═════╝░`,

  V: `
██╗░░░██╗
██║░░░██║
╚██╗░██╔╝
░╚████╔╝░
░░╚██╔╝░░
░░░╚═╝░░░`,

  W: `
░██╗░░░░░░░██╗
░██║░░██╗░░██║
░╚██╗████╗██╔╝
░░████╔═████║░
░░╚██╔╝░╚██╔╝░
░░░╚═╝░░░╚═╝░░`,

  X: `
██╗░░██╗
╚██╗██╔╝
░╚███╔╝░
░██╔██╗░
██╔╝╚██╗
╚═╝░░╚═╝`,

  Y: `
██╗░░░██╗
╚██╗░██╔╝
░╚████╔╝░
░░╚██╔╝░░
░░░██║░░░
░░░╚═╝░░░`,

  Z: `
███████╗
╚════██║
░░███╔═╝
██╔══╝░░
███████╗
╚══════╝`,
};

const electronic = {
  0: `
███████
██─▄▄─█
██─██─█
▀▀▄▄▄▄▀`,

  1: `
██████
█▀░███
██░███
▀▄▄▄▀▀`,

  2: `
███████
█▀▄▄▀██
██▀▄███
▀▄▄▄▄▀▀`,

  3: `
███████
█▄▄▄░██
██▄▄░██
▀▄▄▄▄▀▀`,

  4: `
██████
█░█░██
█▄▄░██
▀▀▄▄▄▀`,

  5: `
███████
██░▄▄▄█
██▄▄▄▒█
▀▀▄▄▄▄▀`,

  6: `
████████
██░▄▄▄██
██░▄▄░██
▀█▄▄▄▄▀▀`,

  7: `
███████
█▄▄▄░██
███░███
▀▀▄██▀▀`,

  8: `
██████
█▀▄▄▀█
█▀▄▄▀█
▀█▄▄█▀`,

  9: `
███████
██░▄▄░█
██▄▄▄░█
▀▀▄▄▄▄▀`,

  A: `
███████
██▀▄─██
██─▀─██
▀▄▄▀▄▄▀`,

  B: `
████████
██▄─▄─▀█
███─▄─▀█
▀▀▄▄▄▄▀▀`,

  C: `
████████
██─▄▄▄─█
██─███▀█
▀▀▄▄▄▄▄▀`,

  D: `
███████
█▄─▄▄▀█
██─██─█
▀▄▄▄▄▀▀`,

  E: `
█████████
██▄─▄▄─██
███─▄█▀██
▀▀▄▄▄▄▄▀▀`,

  F: `
████████
██▄─▄▄─█
███─▄███
▀▀▄▄▄▀▀▀`,

  G: `
█████▀██
█─▄▄▄▄██
█─██▄─██
▀▄▄▄▄▄▀▀`,

  H: `
███████
██─█─██
██─▄─██
▀▀▄▀▄▀▀`,

  I: `
███████
██▄─▄██
███─███
▀▀▄▄▄▀▀`,

  J: `
███████
███▄─▄█
█─▄█─██
▀▄▄▄▀▀▀`,

  K: `
████████
█▄─█─▄██
██─▄▀███
▀▄▄▀▄▄▀▀`,

  L: `
████████
█▄─▄████
██─██▀██
▀▄▄▄▄▄▀▀`,

  M: `
██████████
██▄─▀█▀─▄█
███─█▄█─██
▀▀▄▄▄▀▄▄▄▀`,

  N: `
█████████
█▄─▀█▄─▄█
██─█▄▀─██
▀▄▄▄▀▀▄▄▀`,

  O: `
██████
█─▄▄─█
█─██─█
▀▄▄▄▄▀`,

  P: `
█████████
██▄─▄▄─██
███─▄▄▄██
▀▀▄▄▄▀▀▀▀`,

  Q: `
████████
█─▄▄▄─██
█─██▀─██
▀───▄▄▀▀`,

  R: `
███████
█▄─▄▄▀█
██─▄─▄█
▀▄▄▀▄▄▀`,

  S: `
█████████
██─▄▄▄▄██
██▄▄▄▄─██
▀▀▄▄▄▄▄▀▀`,

  T: `
████████
█─▄─▄─██
███─████
▀▀▄▄▄▀▀▀`,

  U: `
████████
█▄─██─▄█
██─██─██
▀▀▄▄▄▄▀▀`,

  V: `
████████
██▄─█─▄█
███▄▀▄██
▀▀▀▀▄▀▀▀`,

  W: `
████████████
██▄─█▀▀▀█─▄█
███─█─█─█─██
▀▀▀▄▄▄▀▄▄▄▀▀`,

  X: `
████████
██▄─▀─▄█
███▀─▀██
▀▀▄▄█▄▄▀`,

  Y: `
███████
█▄─█─▄█
██▄─▄██
▀▀▄▄▄▀▀`,

  Z: `
████████
██░▄▄░▄█
███▀▄█▀█
▀▀▄▄▄▄▄▀`,
};

const epic = {
  0: `
╔═══╗
║╔═╗║
║║║║║
║║║║║
║╚═╝║
╚═══╝`,

  1: `
─╔╗
╔╝║
╚╗║
─║║
╔╝╚╗
╚══╝`,

  2: `
╔═══╗
║╔═╗║
╚╝╔╝║
╔═╝╔╝
║║╚═╗
╚═══╝`,

  3: `
╔═══╗
║╔═╗║
╚╝╔╝║
╔╗╚╗║
║╚═╝║
╚═══╝`,

  4: `
╔╗─╔╗
║║─║║
║╚═╝║
╚══╗║
───║║
───╚╝`,

  5: `
╔═══╗
║╔══╝
║╚══╗
╚══╗║
╔══╝║
╚═══╝`,

  6: `
╔═══╗
║╔══╝
║╚══╗
║╔═╗║
║╚═╝║
╚═══╝`,

  7: `
╔═══╗
║╔═╗║
╚╝╔╝║
──║╔╝
──║║
──╚╝`,

  8: `
╔═══╗
║╔═╗║
║╚═╝║
║╔═╗║
║╚═╝║
╚═══╝`,

  9: `
╔═══╗
║╔═╗║
║╚═╝║
╚══╗║
╔══╝║
╚═══╝`,

  A: `
╔═══╗
║╔═╗║
║║─║║
║╚═╝║
║╔═╗║
╚╝─╚╝`,

  B: `
╔══╗─
║╔╗║─
║╚╝╚╗
║╔═╗║
║╚═╝║
╚═══╝`,

  C: `
╔═══╗
║╔═╗║
║║─╚╝
║║─╔╗
║╚═╝║
╚═══╝`,

  D: `
╔═══╗
╚╗╔╗║
─║║║║
─║║║║
╔╝╚╝║
╚═══╝`,

  E: `
╔═══╗
║╔══╝
║╚══╗
║╔══╝
║╚══╗
╚═══╝`,

  F: `
╔═══╗
║╔══╝
║╚══╗
║╔══╝
║║---
╚╝---`,

  G: `
╔═══╗
║╔═╗║
║║─╚╝
║║╔═╗
║╚╩═║
╚═══╝`,

  H: `
╔╗─╔╗
║║─║║
║╚═╝║
║╔═╗║
║║─║║
╚╝─╚╝`,

  I: `
╔══╗
╚╣╠╝
║║
║║
╔╣╠╗
╚══╝`,

  J: `
──╔╗
──║║
──║║
╔╗║║
║╚╝║
╚══╝`,

  K: `
---╔╗╔═╗
---║║║╔╝
--║╚╝╝
--║╔╗║
---║║║╚╗
---╚╝╚═╝`,

  L: `
╔╗
║║
║║
--║║─╔╗
--║╚═╝║
--╚═══╝`,

  M: `
╔═╗╔═╗
║║╚╝║║
║╔╗╔╗║
║║║║║║
║║║║║║
╚╝╚╝╚╝`,

  N: `
╔═╗─╔╗
║║╚╗║║
║╔╗╚╝║
║║╚╗║║
║║─║║║
╚╝─╚═╝`,

  O: `
╔═══╗
║╔═╗║
║║─║║
║║─║║
║╚═╝║
╚═══╝`,

  P: `
╔═══╗
║╔═╗║
║╚═╝║
║╔══╝
║║---
╚╝---`,

  Q: `
╔═══╗
║╔═╗║
║║─║║
║║─║║
║╚═╝║
╚══╗║
───╚╝`,

  R: `
╔═══╗
║╔═╗║
║╚═╝║
║╔╗╔╝
║║║╚╗
╚╝╚═╝`,

  S: `
╔═══╗
║╔═╗║
║╚══╗
╚══╗║
║╚═╝║
╚═══╝`,

  T: `
╔════╗
║╔╗╔╗║
╚╝║║╚╝
║║
║║
╚╝`,

  U: `
╔╗─╔╗
║║─║║
║║─║║
║║─║║
║╚═╝║
╚═══╝`,

  V: `
╔╗──╔╗
║╚╗╔╝║
╚╗║║╔╝
─║╚╝║
─╚╗╔╝
──╚╝`,

  W: `
╔╗╔╗╔╗
║║║║║║
║║║║║║
║╚╝╚╝║
╚╗╔╗╔╝
─╚╝╚╝`,

  X: `
╔═╗╔═╗
╚╗╚╝╔╝
─╚╗╔╝
─╔╝╚╗
╔╝╔╗╚╗
╚═╝╚═╝`,

  Y: `
╔╗──╔╗
║╚╗╔╝║
╚╗╚╝╔╝
─╚╗╔╝
──║║
──╚╝`,

  Z: `
╔════╗
╚══╗═║
──╔╝╔╝
─╔╝╔╝
╔╝═╚═╗
╚════╝`,
};

const boldBorder = {
  0: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  1: `
████████████
█░░░░░░░░███
█░░▄▀▄▀░░███
█░░░░▄▀░░███
███░░▄▀░░███
███░░▄▀░░███
███░░▄▀░░███
███░░▄▀░░███
███░░▄▀░░███
█░░░░▄▀░░░░█
█░░▄▀▄▀▄▀░░█
█░░░░░░░░░░█
████████████`,

  2: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  3: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  4: `
████████████████
█░░░░░░██░░░░░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░░░░░█
████████████████`,

  5: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  6: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  7: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░░░░░█
████████████████`,

  8: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  9: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  A: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░░░░░██░░░░░░█
████████████████`,

  B: `
██████████████████
█░░░░░░░░░░░░░░███
█░░▄▀▄▀▄▀▄▀▄▀░░███
█░░▄▀░░░░░░▄▀░░███
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░░░░░▄▀░░░░█
█░░▄▀▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░▄▀░░█
█░░▄▀░░████░░▄▀░░█
█░░▄▀░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░░░█
██████████████████`,

  C: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  D: `
████████████████
█░░░░░░░░░░░░███
█░░▄▀▄▀▄▀▄▀░░░░█
█░░▄▀░░░░▄▀▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░▄▀▄▀░░█
█░░▄▀▄▀▄▀▄▀░░░░█
█░░░░░░░░░░░░███
████████████████`,

  E: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  F: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░░░░░█████████
████████████████`,

  G: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░██░░░░░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  H: `
████████████████
█░░░░░░██░░░░░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░░░░░██░░░░░░█
████████████████`,

  I: `
████████████
█░░░░░░░░░░█
█░░▄▀▄▀▄▀░░█
█░░░░▄▀░░░░█
███░░▄▀░░███
███░░▄▀░░███
███░░▄▀░░███
███░░▄▀░░███
███░░▄▀░░███
█░░░░▄▀░░░░█
█░░▄▀▄▀▄▀░░█
█░░░░░░░░░░█
████████████`,

  J: `
████████████████
█████████░░░░░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█████████░░▄▀░░█
█░░░░░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  K: `
██████████████████
█░░░░░░██░░░░░░░░█
█░░▄▀░░██░░▄▀▄▀░░█
█░░▄▀░░██░░▄▀░░░░█
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░░░░░▄▀░░███
█░░▄▀▄▀▄▀▄▀▄▀░░███
█░░▄▀░░░░░░▄▀░░███
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░██░░▄▀░░░░█
█░░▄▀░░██░░▄▀▄▀░░█
█░░░░░░██░░░░░░░░█
██████████████████`,

  L: `
████████████████
█░░░░░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  M: `
████████████████████████
█░░░░░░██████████░░░░░░█
█░░▄▀░░░░░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░░░░░██░░▄▀░░█
█░░▄▀░░██████████░░▄▀░░█
█░░▄▀░░██████████░░▄▀░░█
█░░▄▀░░██████████░░▄▀░░█
█░░░░░░██████████░░░░░░█
████████████████████████`,

  N: `
████████████████████████
█░░░░░░██████████░░░░░░█
█░░▄▀░░░░░░░░░░██░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░██░░░░░░░░░░▄▀░░█
█░░░░░░██████████░░░░░░█
████████████████████████`,

  O: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  P: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░▄▀░░█████████
█░░░░░░█████████
████████████████`,

  Q: `
██████████████████
█░░░░░░░░░░░░░░███
█░░▄▀▄▀▄▀▄▀▄▀░░███
█░░▄▀░░░░░░▄▀░░███
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░██░░▄▀░░███
█░░▄▀░░░░░░▄▀░░░░█
█░░▄▀▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░░░█
██████████████████`,

  R: `
████████████████████
█░░░░░░░░░░░░░░░░███
█░░▄▀▄▀▄▀▄▀▄▀▄▀░░███
█░░▄▀░░░░░░░░▄▀░░███
█░░▄▀░░████░░▄▀░░███
█░░▄▀░░░░░░░░▄▀░░███
█░░▄▀▄▀▄▀▄▀▄▀▄▀░░███
█░░▄▀░░░░░░▄▀░░░░███
█░░▄▀░░██░░▄▀░░█████
█░░▄▀░░██░░▄▀░░░░░░█
█░░▄▀░░██░░▄▀▄▀▄▀░░█
█░░░░░░██░░░░░░░░░░█
████████████████████`,

  S: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░░░░░█
█░░▄▀░░█████████
█░░▄▀░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█
█████████░░▄▀░░█
█░░░░░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  T: `
████████████████
█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░▄▀░░░░░░█
█████░░▄▀░░█████
█████░░▄▀░░█████
█████░░▄▀░░█████
█████░░▄▀░░█████
█████░░▄▀░░█████
█████░░▄▀░░█████
█████░░▄▀░░█████
█████░░░░░░█████
████████████████`,

  U: `
████████████████
█░░░░░░██░░░░░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█
████████████████`,

  V: `
████████████████
█░░░░░░██░░░░░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░█
█░░▄▀▄▀░░▄▀▄▀░░█
█░░░░▄▀▄▀▄▀░░░░█
███░░░░▄▀░░░░███
█████░░░░░░█████
████████████████`,

  W: `
████████████████████████
█░░░░░░██████████░░░░░░█
█░░▄▀░░██████████░░▄▀░░█
█░░▄▀░░██████████░░▄▀░░█
█░░▄▀░░██████████░░▄▀░░█
█░░▄▀░░██░░░░░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░░░░░▄▀░░█
█░░░░░░██░░░░░░██░░░░░░█
████████████████████████`,

  X: `
████████████████████
█░░░░░░░░██░░░░░░░░█
█░░▄▀▄▀░░██░░▄▀▄▀░░█
█░░░░▄▀░░██░░▄▀░░░░█
███░░▄▀▄▀░░▄▀▄▀░░███
███░░░░▄▀▄▀▄▀░░░░███
█████░░▄▀▄▀▄▀░░█████
███░░░░▄▀▄▀▄▀░░░░███
███░░▄▀▄▀░░▄▀▄▀░░███
█░░░░▄▀░░██░░▄▀░░░░█
█░░▄▀▄▀░░██░░▄▀▄▀░░█
█░░░░░░░░██░░░░░░░░█
████████████████████`,

  Y: `
████████████████████
█░░░░░░░░██░░░░░░░░█
█░░▄▀▄▀░░██░░▄▀▄▀░░█
█░░░░▄▀░░██░░▄▀░░░░█
███░░▄▀▄▀░░▄▀▄▀░░███
███░░░░▄▀▄▀▄▀░░░░███
█████░░░░▄▀░░░░█████
███████░░▄▀░░███████
███████░░▄▀░░███████
███████░░▄▀░░███████
███████░░▄▀░░███████
███████░░░░░░███████
████████████████████`,

  Z: `
████████████████████
█░░░░░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░▄▀▄▀░░█
█████████░░░░▄▀░░░░█
███████░░░░▄▀░░░░███
█████░░░░▄▀░░░░█████
███░░░░▄▀░░░░███████
█░░░░▄▀░░░░█████████
█░░▄▀▄▀░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░░░░░█
████████████████████`,
};

const ansiRegular = {
  0: `
░██████
██░░████
██░██░██
████░░██
░██████`,

  1: `
░██
███
░██
░██
░██`,

  2: `
██████
░░░░░██
░█████
██
███████`,

  3: `
██████
░░░░░██
░█████
░░░░░██
██████`,

  4: `
██░░░██
██░░░██
███████
░░░░░██
░░░░░██`,

  5: `
███████
██
███████
░░░░░██
███████`,

  6: `
░██████
██
███████
██░░░░██
░██████`,

  7: `
███████
░░░░░██
░░░░██
░░░██
░░░██`,

  8: `
░█████
██░░░██
░█████
██░░░██
░█████`,

  9: `
░█████
██░░░██
░██████
░░░░░██
░█████`,

  A: `
░█████
██░░░██
███████
██░░░██
██░░░██`,

  B: `
██████
██░░░██
██████
██░░░██
██████`,

  C: `
░██████
██
██
██
░██████`,

  D: `
██████
██░░░██
██░░░██
██░░░██
██████`,

  E: `
███████
██
█████
██
███████`,

  F: `
   ███████
██
   █████
██
██`,

  G: `
░██████
██
██░░░███
██░░░░██
░██████`,

  H: `
██░░░██
██░░░██
███████
██░░░██
██░░░██`,

  I: `
██
██
██
██
██`,

  J: `
░░░░░██
░░░░░██
░░░░░██
██░░░██
░█████`,

  K: `
██░░░██
██░░██
█████
██░░██
██░░░██`,

  L: `
██
██
██
██
███████`,

  M: `
███░░░░███
████░░████
██░████░██
██░░██░░██
██░░░░░░██`,

  N: `
███░░░░██
████░░░██
██░██░░██
██░░██░██
██░░░████`,

  O: `
░██████
██░░░░██
██░░░░██
██░░░░██
░██████`,

  P: `
██████
██░░░██
██████
██
██`,

  Q: `
░██████
██░░░░██
██░░░░██
██░▄▄░██
░██████
░░░░▀▀`,

  R: `
██████
██░░░██
██████
██░░░██
██░░░██`,

  S: `
███████
██
███████
░░░░░██
███████`,

  T: `
████████
░░░██
░░░██
░░░██
░░░██`,

  U: `
██░░░░██
██░░░░██
██░░░░██
██░░░░██
░██████`,

  V: `
██░░░░██
██░░░░██
██░░░░██
░██░░██
░░████`,

  W: `
██░░░░░██
██░░░░░██
██░░█░░██
██░███░██
░███░███`,

  X: `
██░░░██
░██░██
░░███
░██░██
██░░░██`,

  Y: `
██░░░░██
░██░░██
░░████
░░░██
░░░██`,

  Z: `
███████
░░░███
░░███
░███
███████`,
};

export default function BoldText() {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [convertedText, setConvertedText] =
    useState<{ text: string; name: string }[]>(dummy);
  const [selectedStyle, setSelectedStyle] = useState<string>("boldLines");

  const styles: { [key: string]: Mapping } = {
    boldLines,
    boldBlocks,
    electronic,
    epic,
    boldBorder,
    ansiRegular,
    // Add more styles as needed
  };

  const convertText = (text: string, mapping: Mapping): string => {
    return text
      .split("")
      .map((char) => mapping[char] || char)
      .join("");
  };

  const handleInputChange = (userInput: string, style: string): void => {
    setInputText(userInput);

    const selectedMapping: Mapping = styles[style] || {};
    const convertedChar: string = convertText(userInput, selectedMapping);

    const resultText: string = `${style}: ${convertedChar}\n`;

    setOutputText(resultText);
    setConvertedText([{ text: convertedChar, name: style }]);
  };

  const handleTextareaChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const newInputText = event.target.value.toUpperCase();
    handleInputChange(newInputText, selectedStyle);
  };

  const handleStyleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newStyle = event.target.value;
    setSelectedStyle(newStyle);
    handleInputChange(inputText, newStyle);
  };

  return (
    <section className="mx-6 md:mx-auto md:max-w-lg lg:max-w-4xl">
      <textarea
        placeholder="Enter Text"
        value={inputText}
        onChange={handleTextareaChange}
        className="border w-full mt-4 p-2 rounded-xl focus:outline-none"
        rows={4}
      />
      {/*
      <div>
        <pre>{outputText}</pre>
      </div> */}

      <div>
        <div className="block mb-3">
          <label htmlFor="styleSelector">Change Style:</label>
          <select
            id="styleSelector"
            value={selectedStyle}
            onChange={handleStyleChange}
            className="ml-2 border p-1 rounded-xl"
          >
            <option value="boldLines">Bold Lines</option>
            <option value="boldBlocks">Bold Blocks</option>
            <option value="electronic">Electronic</option>
            <option value="epic">Epic</option>
            <option value="boldBorder">Bold Border</option>
            <option value="ansiRegular">Ansi Regular</option>
            {/* Add more style options as needed */}
          </select>{" "}
        </div>
      </div>

      <Ads/>

      <div className="bg-white py-0 mb-8 rounded-2xl border mx-auto ">
        {convertedText.map((name, index) => (
          <div
            className={`text-center`}
            key={index} // Added a unique key for each element in the map
          >
            <pre
              className={`text-xs py-3 px-3 cursor-pointer `}
              onClick={(e) => {
                navigator.clipboard.writeText(name.text),
                  toast.success("Copied to clipboard");
              }}
            >
              {name.text.split("\n").map((line, i: number) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </pre>
          </div>
        ))}
      </div>
      <Ads/>
    </section>
  );
}

const dummy = [
  {
    text: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██░░██████░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██████──██████─
────────────────`,
    name: "futureAlienChar",
  },

  {
    text: `──────────────────
─██████████████───
─██░░░░░░░░░░██───
─██░░██████░░██───
─██░░██──██░░██───
─██░░██████░░████─
─██░░░░░░░░░░░░██─
─██░░████████░░██─
─██░░██────██░░██─
─██░░████████░░██─
─██░░░░░░░░░░░░██─
─████████████████─
──────────────────`,
    name: "squiggle6Char",
  },
  {
    text: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
    name: "squiggle5Char",
  },
  {
    text: `────────────────
─████████████───
─██░░░░░░░░████─
─██░░████░░░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░████░░░░██─
─██░░░░░░░░████─
─████████████───
────────────────`,
    name: "asianStyle2Char",
  },
  {
    text: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
    name: "asianStyleChar",
  },
  {
    text: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██─────────
─██░░██─────────
─██████─────────
────────────────`,
    name: "squaresChar",
  },
  {
    text: `────────────────
─██████████████─
─██░░░░░░░░░░██─
─██░░██████████─
─██░░██─────────
─██░░██─────────
─██░░██──██████─
─██░░██──██░░██─
─██░░██──██░░██─
─██░░██████░░██─
─██░░░░░░░░░░██─
─██████████████─
────────────────`,
    name: "squiggl4Char",
  },
];
