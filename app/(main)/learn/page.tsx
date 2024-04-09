import { FeedWrapper } from '@/components/feedwrapper'
import { StickyWrapper } from '@/components/stickwrapper'
import React from 'react'
import { Header } from './header'
import { UserProgress } from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const LearnPage = async () => {
  const userProgressData = await getUserProgress();

  const [
    userProgress
  ] = await Promise.all([
    userProgressData
  ]);
 
 if(!userProgress || !userProgress.activeCourseId)
  redirect('/courses')

  return (
    <div className ="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
            <UserProgress 
                activeCourse={userProgress.activeCourse}
                hearts={userProgress.hearts}
                points={userProgress.points}
                hasActiveSubscription={false}
            />
        </StickyWrapper>
        <FeedWrapper>
            <Header title={userProgress.activeCourse.title}/>
        </FeedWrapper>
    </div>
  )
}

export default LearnPage