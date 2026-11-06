/** Build a mailto link with an encoded subject and prefilled body. */
export function mailto(email: string, subject: string, body?: string): string {
    const params = [`subject=${encodeURIComponent(subject)}`];
    if (body) params.push(`body=${encodeURIComponent(body)}`);
    return `mailto:${email}?${params.join('&')}`;
}
