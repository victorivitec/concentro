'use client'
import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import { Text } from '../atoms/data-display/Text';
import s from './Card.module.scss';

import LunchDiningIcon from '@mui/icons-material/LunchDining';

interface CardComponentProps {
  title: string;
  content: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, content }) => {
  const [elevation, setElevation] = useState(0);

  return (
    <Card
      className={s.card}
      elevation={elevation}
      onMouseEnter={() => setElevation(12)} // Incrementa la elevación al hover
      onMouseLeave={() => setElevation(0)}
      style={{ transition: 'all 0.5s ease-in' }}
    >
      <CardContent>
      <LunchDiningIcon sx={{fontSize: '5em'}}/>
        <Text type='subtitle1' color='primary'>{title}</Text>
        <Text type='body1'>{content}</Text>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
