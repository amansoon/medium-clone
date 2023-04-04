import avatar1 from "../image/avatars/avatar-1.jpg"
import avatar2 from "../image/avatars/avatar-2.jpg"
import avatar3 from "../image/avatars/avatar-3.jpg"
import avatar4 from "../image/avatars/avatar-4.jpg"
import avatar5 from "../image/avatars/avatar-5.jpg"
import avatar6 from "../image/avatars/avatar-6.jpg"
import avatar7 from "../image/avatars/avatar-7.jpg"
import avatar8 from "../image/avatars/avatar-8.jpg"
import avatar9 from "../image/avatars/avatar-9.jpg"
import avatar10 from "../image/avatars/avatar-10.jpg"
import avatar11 from "../image/avatars/avatar-11.jpg"
import avatar12 from "../image/avatars/avatar-12.jpg"
import avatar13 from "../image/avatars/avatar-15.jpg"
import avatar14 from "../image/avatars/avatar-14.jpg"
import avatar15 from "../image/avatars/avatar-15.jpg"

import thumb1 from "../image/thumbnail/thumb1.png"
import thumb2 from "../image/thumbnail/thumb2.jpeg"
import thumb3 from "../image/thumbnail/thumb3.png"
import thumb4 from "../image/thumbnail/thumb4.jpg"
import thumb5 from "../image/thumbnail/thumb5.jpeg"
import thumb6 from "../image/thumbnail/thumb6.png"
import thumb7 from "../image/thumbnail/thumb7.jpeg"
import thumb8 from "../image/thumbnail/thumb8.jpeg"
import thumb9 from "../image/thumbnail/thumb9.jpeg"
import thumb10 from "../image/thumbnail/thumb10.jpeg"
import thumb11 from "../image/thumbnail/thumb11.jpeg"
import thumb12 from "../image/thumbnail/thumb2.jpeg"
import thumb13 from "../image/thumbnail/thumb5.jpeg"
import thumb14 from "../image/thumbnail/thumb9.jpeg"
import thumb15 from "../image/thumbnail/thumb8.jpeg"





const suggested_stories = [
    {
        id: 1,
        avatar: avatar1,
        author: 'Albero Romero',
        topic: 'Artificial Intelligence',
        thumbnail: thumb1,
        title: 'How Today’s AI Art Debate Will Shape the Creative Landscape of the 21st Century',
        text: 'How the singular features and the lack of regulation of AI systems make this situation uniquely challenging.',
        date: 'Aug 21',
        duration: '7 min'
    },
    {
        id: 2,
        avatar: avatar2,
        author: 'Michael Beausoleil',
        topic: 'Business',
        thumbnail: thumb2,
        title: 'The Future of Retail Is Happening at Starbucks Right Now',
        text: 'The future has more stores, more technology, fewer employees, and a struggle to get paid.',
        date: 'Aug 22',
        duration: '8 min'
    },

    {
        id: 3,
        avatar: avatar3,
        author: 'Ben "The Hosk" Hosking',
        topic: 'Programming',
        thumbnail: thumb3,
        title: 'Agile Projects Have Become Waterfall Projects With Sprints',
        text: 'All the agility has been sucked out of agile projects',
        date: 'Aug 18',
        duration: '4 min'
    },

    {
        id: 4,
        avatar: avatar4,
        author: '6XC',
        topic: 'Programming',
        thumbnail: thumb4,
        title: 'Cows, climate and the methane deception',
        text: 'They’re part of a carbon cycle, not a carbon source.',
        date: 'Aug 21',
        duration: '3 min'
    },

    {
        id: 5,
        avatar: avatar5,
        author: 'Maxi Gorynski',
        topic: 'Wearables',
        thumbnail: thumb5,
        title: 'Why Smart Glasses are the Future of Live Music',
        text: 'Phones might have ruined the atmosphere at concerts, but smart glasses could bring live shows into a whole new dimension.',
        date: 'Aug 19',
        duration: '8 min'
    },

    {
        id: 6,
        avatar: avatar6,
        author: 'Sara_Mednick',
        topic: 'Medicine',
        thumbnail: thumb6,
        title: 'Sleep… nature’s healer. So why is it the last thing you’ll find at a hospital?',
        text: 'During my one-month stint as a Children’s Hospital parent, I learned that hospitals and the entire approach of western medicine',
        date: 'Aug 19',
        duration: '10 min'
    },

    {
        id: 7,
        avatar: avatar7,
        author: 'Camille Fournier',
        topic: 'Engineering',
        thumbnail: thumb7,
        title: 'The Product Culture Shift',
        text: 'Hint: The change starts in engineering',
        date: 'Aug 14',
        duration: '7 min'
    },
    
    {
        id: 8,
        avatar: avatar8,
        author: 'Dora Cee',
        topic: 'Design',
        thumbnail: thumb8,
        title: 'Becoming type-sensitive with font psychology',
        text: 'Typography drives a handful of cognitive processes that shape how a design is perceived, yet often get overlooked. Let’s remedy',
        date: 'Aug 14',
        duration: '10 min'
    },

    {
        id: 9,
        avatar: avatar9,
        author: 'Emmanuel Macron',
        topic: 'Health',
        thumbnail: thumb9,
        title: 'Sharing technology and supporting innovation is not just about equity.',
        text: 'Inequity has plagued the responses to harmful pathogens. Take COVID-19: an unprecedented 11.9 billion vaccine doses have been',
        date: 'Aug 18',
        duration: '5 min'
    },

    {
        id: 10,
        avatar: avatar10,
        author: 'Toni Koraza',
        topic: 'Entrepreneurship',
        thumbnail: thumb10,
        title: 'I Asked 167 Successful Entrepreneurs How to Start a Business',
        text: 'Here are 32 top answers',
        date: 'Aug 16',
        duration: '14 min'
    },

    {
        id: 11,
        avatar: avatar11,
        author: 'Joseph Dana',
        topic: 'Politics',
        thumbnail: thumb11,
        title: 'America Wants to Reset Relations With Africa. Is It Too Late?',
        text: 'China and Russia have cashed in on the damage done by Trump to US-Africa relations, but it may not be too late to catch up',
        date: 'Aug 18',
        duration: '4 min'
    },

    {
        id: 12,
        avatar: avatar12,
        author: 'Jamie Cohen',
        topic: 'Surveillance Capitalism',
        thumbnail: thumb12,
        title: 'Why “Ring Nation” is Perfect American Television',
        text: 'Amazon wants your doorbell footage for its new dystopian television show',
        date: 'Aug 18',
        duration: '5 min'
    },

    {
        id: 13,
        avatar: avatar13,
        author: 'Danielle Dick, Ph.D.',
        topic: '',
        thumbnail: thumb13,
        title: 'Is it safe to drink in moderation?',
        text: 'Here’s what a new global study says',
        date: 'Aug 18',
        duration: '5 min'
    },

    {
        id: 14,
        avatar: avatar14,
        author: 'John DeVore',
        topic: 'Family',
        thumbnail: thumb14,
        title: 'When I Sleep, I Dream About A Comic Book Shop That Never Ends',
        text: 'And I re-read Neil Gaiman’s ‘The Sandman’',
        date: 'Aug 18',
        duration: '9 min'
    },

    {
        id: 15,
        avatar: avatar15,
        author: 'Stephen Foerster',
        topic: 'Investing',
        thumbnail: thumb15,
        title: 'Why I Just Bought My First NFT, and What I Learned',
        text: 'An NFT of the New York Mets retired player’s “most famous sports contract of all time”',
        date: 'Aug 17',
        duration: '10 min'
    },


]


export {suggested_stories} ;