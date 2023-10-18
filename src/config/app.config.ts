interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage freelancer profile',
    'Manage applications',
    'Read job offers',
    'Read company information',
  ],
  ownerAbilities: ['Manage freelancer profiles', 'Manage applications', 'Manage job offers', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/3b44263f-f13b-4093-98f2-bdf019183a0a',
};
