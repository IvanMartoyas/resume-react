export const base = {
    resume_titel: ['Моё резюме', 'My resume'],
    lang_index: 0,
    vacancy: ['Вакансия: ','Vacancy: '],
    title_resume: ['Frontend-разработчик Vue/React', 'Frontend-developer Vue/React'],
    salary: {
        label: ['Зарплата', 'Salary'],
        value: 60000,
    },
    about: {
        label: ['О себе', 'About'],
        description: [
            `Занимаюсь frontend разработкой сайтов, на Vue/next, wordpress, 1C.
             Сам развиваюсь в направлении full stack development.`,
            `I am engaged in frontend website development, on Vue/next, wordpress, 1C.
             I'm developing towards full stack development myself`
        ]
    },
    sUggestions: {
        label: ['Пожелания по условиям работы', 'Suggestions on conditions worck'],
        list: [
            {
                id: 1,
                label: ['График работы', 'Work schedule'],
                data: ['Полный день', ' Удалённая работа']
            },
            {
                id: 2,
                label: ['Тип занятости', 'Type of employment'],
                data: ['Полная занятость', 'Частичная занятость']
            },
            {
                id: 3,
                label: ['Желательное время в пути до работы', 'Desirable travel time to work'],
                data: ['Не имеет значения']
            },
            {
                id: 3,
                label: ['Командировки', 'Business trips'],
                data: ['Могу']
            },
        ]
    },
    about_programm: {
        label: ['О программе', 'About programm'],
        description: [
            `
                Разработанна: в 2025 году
                Разрабодчик: Иван Мартояс 
            `,
            `
                Developed: in 2025
                Developer: Ivan Martoyas
            `
        ],
        tag_title: ['Технологии', 'Tehnology'],
        data: ['React', 'React-Router', 'Bootstrap 5', 'Bootstrap-icon', 'SCSS', 'Git Hub']
    }
}

export const contacts = {
    label: ['Контакты', 'Contact'],
    phone:  {
        label: ['Телефон', 'Phone'],
        value: ['+7 (996) 192-19-25'],
        link: 'tel:+79961921925'
    },
    mail: {
        label: ['Электронная почта', 'Email'],
        value: ['ivanmart2017@yandex.ru'],
        link: 'mailto:ivanmart2017@yandex.ru'
    },
    GitHub: {
        label: ['Мой git репозиторий', 'My git repository'],
        value: ['IvanMartoyas'],
        link: 'https://github.com/IvanMartoyas',
    },
    GitHubRepository: {
        label: ['Репозиторий проекта', 'Project Repository'],
        value: ['IvanMartoyas/resume-react'],
        link: 'https://github.com/IvanMartoyas/resume-react',
    },
}
export const skills = {
    label: ['Навыки', 'Skills'],
    data: ['sql', 'Vue js', 'Bootstrap', 'Wordpress', 'Wordpress', 'HTML5', 'PHP', 'less/sass', 'ES6', 'Nuxt', 'Node', 'React', 'Git', 'TypeScript', 'C#', 'Webpack', 'Redux', '1C']
}
export const work_experience = {
    label: ['Опыт работы','work experience'],
    data: [
        {
            label: ['Менеджер по продажам','Sales Manager'],
            post: ['Главный системный администратор','Chief System Administrator'],
            description: {
                label: ['Описание', 'Description'],
                value: [
                    `Консультировал по подписке Яндекс  Бизнеса.`,
                    `He advised on the Yandex Business subscription.`
                ]
            },
            place_worck: {
                label: ['Место работы', 'Place of work'],
                value: ['OOO Яндекс Бизнес','OOO Яндекс Бизнес']
            },
            timeStart: {
                label: ['Дата начала', 'Data start'],
                year: 2020,
                month: 2,
            },
            timeEnd: {
                label: ['Дата окончания', 'Data finish'],
                year: 2023,
                month: 4,
            },
            working_now: {
                label: ['Работаю сейчас', `I'm working now`],
                value: false
            }
        },
        {   
            label: ['Веб разрабодчик','Web developer'],
            post: ['Главный системный администратор','Chief System Administrator'],
            description: {
                label: ['Описание', 'Description'],
                value: [
                    `Обеспечение работоспособности районного сервера, обслуживание ПК, сотрудников РАНО, проводил проверки рабочих мест у школ и детсадов, делал настройку на местах 1С бухгалтерии, работал с электронными подписями и крипто про.`,
                    `Ensuring the operability of the district server, maintaining PCs, employees EARLY, checking workplaces at schools and kindergartens, setting up 1C accounting on the ground, working with electronic signatures and crypto pro.`
                ],
            },
            place_worck: {
                label: ['Место работы', 'Place of work'],
                value: ['Управление образования Меленковского района.','Melenkovsky district Education Department.']
            },
            timeStart: {
                label: ['Дата начала', 'Data start'],
                year: 2019,
                month: 1,
            },
            timeEnd: {
                label: ['Дата окончания', 'Data finish'],
                year: 2021,
                month: 1,
            },
            working_now: {
                label: ['Работаю сейчас', `I'm working now`],
                value: false
            }
        },
    ]
}
export const education = {
    label: ['Образование', 'Education'],
    data: [
        {
            level: ['Среднее специальное','Secondary special education'],
            label: ['Муромский институт (филиал) Владимирского государственного университета им. А.Г. и Н.Г. Столетовых, Муром','Murom Institute (branch) Vladimir State University named after A.G. and N.G. Stoletov, Murom'],
            department: {
                label: ['Кафедра', 'Department'],
                data: ['ФИТ', 'FIT']
            },
            post: { 
                label: ['Специализация', 'Specialization'],
                value: ['Техник программист ','Programmer technician']
            },
            timeStart: {
                label: ['Дата начала', 'Data start'],
                year: 2016,
                month: 9,
            },
            timeEnd: {
                label: ['Дата окончания', 'Data finish'],
                year: 2019,
                month: 6,
            },
            studying_now: {
                label: ['Продолжаю проходить обучение', `I am continuing my training`],
                value: false
            }
        },
    ]
}