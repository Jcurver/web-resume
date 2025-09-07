import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Amously',
      positions: [
        {
          title: 'React 웹 프론트엔드 개발자',
          startedAt: '2024-12',
          descriptions: [
            'Steering Kernel patching and updates for various distributions',
            'Automating deployment and integration processes for Linux servers',
            'Spearheading initiatives to enhance Linux kernel security',
            'Collaborating with global developers to coordinate code contributions',
          ],
          skillKeywords: ['React', 'TypeScript', 'Plotly', 'Tailwind CSS', 'shadcn/ui'],
        },
        // {
        //   title: 'System Engineer Intern',
        //   startedAt: '1996-02',
        //   endedAt: '1996-05',
        //   descriptions: [
        //     'Assisted senior engineers in maintaining and updating kernel patches for Linux distributions',
        //     'Supported deployment and integration tasks for Linux server environments',
        //     'Conducted research on Linux kernel security practices and presented findings to the team',
        //   ],
        //   skillKeywords: ['C', 'Linux', 'Kernel', 'Support', 'Research'],
        // },
      ],
    },
    {
      title: '산타',
      positions: [
        {
          title: 'React Native 앱 프론트엔드 개발자',
          startedAt: '2023-07',
          endedAt: '2024-12',
          descriptions: [
            'Promoted the use and development of Linux globally.',
            'Developed automated scripts to streamline system configuration.',
            'Facilitated live patching systems, reducing downtime.',
          ],
          skillKeywords: ['React Native', 'Typescript', 'AWS', 'RDBMS'],
        },
      ],
    },
    {
      title: '모모프로젝트코리아',
      positions: [
        {
          title: 'React Native 앱 프론트앤드 개발자',
          startedAt: '2023-04',
          endedAt: '2023-05',
          descriptions: [
            'Promoted the use **and** development of Linux globally.',
            'Developed automated scripts to streamline system configuration.',
            'Facilitated live patching systems, reducing downtime.',
          ],
          skillKeywords: ['React Native', 'TypeScript', 'AWS', 'RDBMS'],
        },
      ],
    },
    {
      title: '드랍스튜디오',
      positions: [
        {
          title: 'React 웹 프론트엔드 개발자',
          startedAt: '2022-06',
          endedAt: '2022-07',
          descriptions: [
            'Promoted the use and development of Linux globally.',
            'Developed automated scripts to streamline system configuration.',
            'Facilitated live patching systems, reducing downtime.',
          ],
          skillKeywords: ['React', 'Next.js', 'Typescript'],
        },
      ],
    },
  ],
};

export default experience;
