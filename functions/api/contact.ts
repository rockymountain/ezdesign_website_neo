import {
  handleContactRequest,
  type ContactEnv,
} from '../../src/server/contact-handler';

export const onRequest: PagesFunction<ContactEnv> = async (context) => {
  return handleContactRequest(context.request, context.env);
};