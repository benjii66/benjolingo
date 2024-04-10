"use client";

import { challengeOptions, challenges } from '@/db/schema';
import React, { useState } from 'react'
import { Header } from './header';


type Props = {
  initialLessonId: number,
  initialLessonChallenges: (typeof challenges.$inferSelect & { completed: boolean, challengeOptions: typeof challengeOptions.$inferSelect[] })[],
  initialHearts: number,
  initialPercentage: number,
  userSubscription: any //replace with sub DB type
}


const Quiz = ({ initialLessonId, initialLessonChallenges, initialHearts, initialPercentage, userSubscription }: Props) => {


  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(25 || initialPercentage);

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  )
}

export default Quiz