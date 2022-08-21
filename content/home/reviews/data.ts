import Upwork from 'public/images/logos/upwork.svg';

type ReviewType = {
    image?: string;
    name?: string;
    position?: string;
    text: string;
}

export const reviews: ReviewType[] = [
    {
        image: Upwork,
        text: `Vsevolod is a very knowledgeable and professional developer. He was able to deliver the projects faster than promised and was available during different times of the day to address questions and concerns. Def will work with him again on future projects!`
    },
    {
        name: 'Vika Yahimez',
        position: 'Marketing Specialist at Marketing & production agency Go Viral',
        text: `I worked with Seva several times and was always happy with the result.
Very sensitive to details and customer edits. I've liked that during our work via Skype Seva 
always offered some ideas, was always showed an initiative.
I would be glad to work together with him again and will recommend him as a specialist!`
    },
    {
        image: Upwork,
        text: `He was very helpful to fix issues. Satisfied work.`
    },
    {
        name: 'Mikhail Tyshchenko',
        position: 'Web-master in Freelancer',
        text: `I've worked with Seva more than once on various tasks... Starting with corrections, and ending with the site layout. He always meets deadlines and makes edits. I recommend to cooperate with him.`
    },
    {
        image: Upwork,
        text: `Great job as always, more projects are coming soon =)`
    },
    {
        name: 'Alexander Ulitin',
        position: 'Producer in Alpha Club Trenings',
        text: `I worked with Seva on site layout several times, he made a number of landing pages, the prise is affordable.He works quickly and qualitively.`
    },
    {
        image: Upwork,
        text: `Fantastic communication, swift and quality work!`
    },

    {
        image: Upwork,
        text: `Vsevolod was available within minutes to fix an issue that was caused by a custom form from a 3rd party.`
    },
    {
        name: 'Alexey Barinov',
        position: 'Augmented Reality solutions for business at KIFREEZ',
        text: `We have worked together on many projects, with a different set of requirements from clients. As a team with Seva, the projects always become easier and more logical. He works great alone and also skillfully manages a team.`
    },
    {
        image: Upwork,
        text: `Great job, would use again. Did everything I asked and didn't need any guidance!`
    },
    {
        name: 'Stanislav Berstenev',
        position: 'Digital designer / Web Design Specialist',
        text: `I have worked with Vsevolod on two projects. And I was pleasantly surprised by the speed and quality of the si te layout. He is an amazing specialist who is passionate about his work. I recommend everybody to cooperate with him.`
    }
];