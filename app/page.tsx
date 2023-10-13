"use client";
import React from 'react';
import MainLogo from "@/components/MainLogo";
import { MainContainer } from '@/components/Styled';
import { Main } from 'next/document';

const HomePage: React.FC = () => {

  return (
    <MainContainer>
      <MainLogo />
    </MainContainer>
  )
}

export default HomePage;