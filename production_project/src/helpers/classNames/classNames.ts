/* Спец тип для Mods. Означает, что в качестве ключа будет string, а для значения string | boolean*/
type Mods = Record<string, boolean | string>

/* Для тренировки сделал самописную функцию, склеивающую классы */
export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_key, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(" ");
}