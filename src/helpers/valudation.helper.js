import { VALIDATION_RULES } from "src/constants/validation-rules.constants"

export const getValidationRules = () => {
  return {
    title: {
      required: VALIDATION_RULES.REQUIRED
    },
    release_date: {
      required: VALIDATION_RULES.REQUIRED
    },
    poster_path: {
      required: VALIDATION_RULES.REQUIRED
    },
    vote_average: {
      valueAsNumber: true,
      required: VALIDATION_RULES.REQUIRED,
      min: {
        value: 0,
        message: VALIDATION_RULES.POSITIVE_NUMBERS
      },
      max: {
        value: 10,
        message: `${VALIDATION_RULES.MAX} 10`
      }
    },
    runtime: {
      valueAsNumber: true,
      required: VALIDATION_RULES.REQUIRED,
      min: {
        value: 0,
        message: VALIDATION_RULES.POSITIVE_NUMBERS
      }
    },
    overview: {
      required: VALIDATION_RULES.REQUIRED
    },
    genres: {
      required: VALIDATION_RULES.REQUIRED
    }
  }
}