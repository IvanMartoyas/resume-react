export const base = {
    vacancy: ['Вакансия','Vacancy'],
    title_resume: ['Frontend-разработчик Vue/React', 'Frontend-developer Vue/React'],
    salary: {
        label: ['Зарплата', 'Salary'],
        data: 50000,
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
        label: ['Пожелания по условиям', 'Suggestions on conditions'],
        time_worck: {
            label: ['График работы', 'Work schedule'],
            data: ['Полный день', ' Удалённая работа']
        },
        type_worck: {
            label: ['Тип занятости', 'Type of employment'],
            data: ['Полная занятость', 'Частичная занятость']
        },
        travel_time_work: {
            label: ['Желательное время в пути до работы', 'Desirable travel time to work'],
            data: ['Не имеет значения']
        },
        Business_trips: {
            label: ['Командировки', 'Business trips'],
            data: ['Могу']
        },
    },
    contacts: {
        label: ['Контакты', 'Contact'],
        data: [
            {
                label: ['Телефон', 'Phone'],
                data: ['+7 (996) 192-19-25']
            },
            {
                label: ['Электронная почта', 'Email'],
                data: ['ivanmart2017@yandex.ru']
            },
            {
                label: ['Мой git репозиторий', 'My git repository'],
                link: 'https://github.com/IvanMartoyas',
            }
        ]
    },
}

export const skills = {
    label: ['Навыки', 'skills'],
    data: ['sql', 'Vue js', 'Bootstrap', 'Wordpress', 'Wordpress', 'HTML5', 'PHP', 'less/sass', 'ES6', 'Nuxt', 'Node', 'React', 'Git', 'TypeScript', 'C#', 'Webpack', 'Redux', '1C']
}
export const work_experience = {
    label: ['Опыт работы','work experience'],
    data: [
        {
            company: ['Yandex','Yandex'],
            post: ['Главный системный администратор','Chief System Administrator'],
            place_worck: {
                label: ['Место работы', 'Place of work'],
                data: ['Управление образования Меленковского района.','Melenkovsky district Education Department.']
            },
            labelStart: {
                label: ['Дата начала', 'Data start'],
                year: '01.02.2020',
            },
            labelEnd: {
                label: ['Дата окончания', 'Data finish'],
                year: '01.04.2021',
            },
        },
        {
            company: ['Веб разрабодчик','Web developer'],
            post: ['Главный системный администратор','Chief System Administrator'],
            place_worck: {
                label: ['Место работы', 'Place of work'],
                data: ['Управление образования Меленковского района.','Melenkovsky district Education Department.']
            },
            labelStart: {
                label: ['Дата начала', 'Data start'],
                year: '01.01.2019 ',
            },
            labelEnd: {
                label: ['Дата окончания', 'Data finish'],
                year: false,
            },
        },
    ]
}
export const education = {
    label: ['Образование', 'education'],
    data: [
        {
            level: ['Среднее специальное','Secondary special education'],
            label: ['Муромский институт (филиал) Владимирского государственного университета им. А.Г. и Н.Г. Столетовых, Муром','Murom Institute (branch) Vladimir State University named after A.G. and N.G. Stoletov, Murom'],
            department: {
                label: ['Кафедра', 'Department'],
                data: ['ФИТ', 'FIT']
            },
            post: { 
                label: ['Должность', 'Post'],
                data: ['Техник программист ','Programmer technician']
            },
            labelStart: {
                label: ['Дата начала', 'Data start'],
                year: 2016,
            },
            labelEnd: {
                label: ['Дата окончания', 'Data finish'],
                year: 2019,
            },
        },
    ]
}