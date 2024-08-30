import Joi from "joi";


export const userProfileSchema =Joi.object({
  name: Joi.string(),
  about: Joi.string(),
  location: Joi.string(),
  contact: Joi.string(),
  image: Joi.string(),
  profileimage:Joi.string()
})

