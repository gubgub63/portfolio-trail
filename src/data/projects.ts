import { trailGoals } from './trail';
import { trailCopy } from './trail-copy';
import type { Lang } from '../lib/routes';

export type ProjectId = 'gr441' | 'utlac' | 'vda';

/** Calendar order of the 2027 season (GR441 early 2027, UTLAC in May, VDA in July). */
export const projectOrder: ProjectId[] = ['gr441', 'utlac', 'vda'];

export const projectNames: Record<ProjectId, string> = {
    gr441: 'GR441',
    utlac: 'UTLAC 120K',
    vda: 'Val d’Aran · VDA 160K',
};

/** Goals merged with their localized copy, in calendar order. */
export function getProjects(lang: Lang) {
    const copy = trailCopy[lang];
    const localized = trailGoals.map((goal, index) => ({
        ...goal,
        ...copy.goals[index],
        id: goal.id as ProjectId,
        name: projectNames[goal.id as ProjectId],
        partnership: copy.goalPartnerships[index],
        elevationLabel: lang === 'fr' ? goal.elevation.replace(',', ' ') : goal.elevation,
    }));
    return projectOrder.map((id) => localized.find((goal) => goal.id === id)!);
}

export function getProject(id: ProjectId, lang: Lang) {
    return getProjects(lang).find((project) => project.id === id)!;
}
