const getSubjectPluralText = (subjectCount:number) => {
  if (subjectCount === 1){
    return 'и еще 1 тема'
  }

  return `и еще ${subjectCount} темы`
}

export default getSubjectPluralText