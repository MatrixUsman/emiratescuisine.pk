export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
}

export const branches: Branch[] = [
  {
    id: "sahiwal",
    name: "Branch 1 - Sahiwal",
    address: "Sattar Complex Five Ways Chowk, Sahiwal",
    city: "Sahiwal",
  },
  {
    id: "okara",
    name: "Branch 2 - Okara",
    address: "GT Road Beside Punjab College & Abdullah Hosp, Okara",
    city: "Okara",
  },
];
