import React from 'react';

export const calculateAge = (date: React.ChangeEvent<HTMLInputElement>) => {
  const birth = new Date(date.target.value);
  const now = new Date();
  let years = 0;

  years = now.getFullYear() - birth.getFullYear();
  birth.setFullYear(now.getFullYear());

  if (now < birth) {
    years--;
  }

  return years;
};
