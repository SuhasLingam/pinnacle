'use client';
import { Rubik_Mono_One } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { GradientText } from '@/components/GradientText';
import { ApplyButton } from '@/components/ApplyButton';

const rubikMonoOne = Rubik_Mono_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#5271FF] via-[#FFFFFF] to-[#B4FF00] relative overflow-hidden">
      <Navigation />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 space-y-8">
        <div className="w-full overflow-x-hidden">
          <GradientText 
            text="PINNACLE"
            size="large"
            fontClass={rubikMonoOne.className}
            className="mb-4 flex justify-center gap-4 md:gap-6"
          />
          
          <GradientText 
            text="1ST EDITION"
            size="small"
            fontClass={rubikMonoOne.className}
            className="mb-12 flex justify-center gap-2 md:gap-4"
          />
        </div>
        
        <ApplyButton />
      </div>
    </main>
  );
}
