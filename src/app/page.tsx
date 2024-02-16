import { About } from '@/components/about'
import { Career } from '@/components/career'
import { Navigation } from '@/components/navigation'
import { Projects } from '@/components/projects'
import { Section } from '@/components/section'
import { SectionSecondaryTitle } from '@/components/section-secondary-title'
import { SectionTitleMain } from '@/components/section-title-main'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ABOUT as about } from '@/data'
import { BriefCaseIcon } from '@/icons/brief-case'
import { CodeIcon } from '@/icons/code'
import { ResumeIcon } from '@/icons/resume'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 px-6'>
      <Section id='about' className='pb-32'>
        <Avatar />

        <SectionTitleMain />

        <div className='flex flex-col font-normal gap-4 text-lg md:text-xl text-slate-300 text-pretty'>
          <About title={about.title} description={about.description} />
        </div>

        <Navigation />
      </Section>

      <Section id='career' className='md:pb-32 pb-24'>
        <SectionSecondaryTitle>
          <BriefCaseIcon class='size-8' />
          Career
          <a
            href='https://cv.emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center ml-2'
          >
            <Badge>
              <div className='flex items-center'>
                <ResumeIcon class='size-4 mr-1' />
                Resume
              </div>
            </Badge>
          </a>
        </SectionSecondaryTitle>
        <Career />
      </Section>

      <Section id='projects' className='md:pb-32 pb-24'>
        <SectionSecondaryTitle>
          <CodeIcon class='size-8' />
          Projects
        </SectionSecondaryTitle>
        <Projects />
      </Section>
    </main>
  )
}
