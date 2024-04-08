import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonsPage = () => {
  return (
   <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
   <Button>
    Default
   </Button>

   <Button>
    Test 2
   </Button>
   </div>
  )
}

export default ButtonsPage