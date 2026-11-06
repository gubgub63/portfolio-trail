import { gr441Project } from './gr441-project';

/** Goals are ambitions supplied by Enzo, not confirmed race entries or completed records. */
export const trailGoals = [
    {
        id: 'utlac',
        title: 'UTLAC 120K',
        location: 'Lake Como, Italy',
        timing: '7 May 2027',
        type: 'Race goal',
        image: '/images/trail/utlac.webp',
        imageAlt: 'Lake Como and its mountain shores, seen from Bellagio',
        distance: '122 km',
        elevation: '6,209 m+',
        description:
            'Run from Menaggio to Lecco, between the shores of Lake Como and the ridges above it. A mountain ultra to take my long-distance running a step further.',
        href: 'https://www.utlactrail.com/gare/120k/',
        linkLabel: 'Explore UTLAC',
    },
    {
        id: 'gr441',
        title: 'GR441 · FKT attempt',
        location: 'Chaîne des Puys, Auvergne',
        timing: gr441Project.timing.en,
        type: 'Personal challenge',
        image: '/images/trail/auvergne.webp',
        imageAlt: 'The volcanic landscape of the Chaîne des Puys, seen from Puy de Dôme',
        distance: '114 km',
        elevation: '2,782 m+',
        description:
            'Attempt a supported fastest known time on the loop around my home volcanoes in early 2027. A personal project, from the preparation to attempt day.',
        href: 'https://fastestknowntime.com/route/gr441-france',
        linkLabel: 'View the FKT route',
    },
    {
        id: 'vda',
        title: 'Val d’Aran · VDA 160K',
        location: 'Val d’Aran, Spain',
        timing: '9 July 2027',
        type: 'Race goal',
        image: '/images/trail/vda.webp',
        imageAlt: 'The Val d’Aran mountains above Bossòst in the Pyrenees',
        distance: '163 km',
        elevation: '10,000 m+',
        description:
            'Take on the Torn dera Val d’Aran, a long loop from Vielha through Pyrenean valleys, passes and mountain lakes. A new scale of endurance to prepare for.',
        href: 'https://valdaran.utmb.world/races/VDA',
        linkLabel: 'Explore the VDA',
    },
];
