import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';
// At it's simplest, access control is a yes/no value
// depending on the users session

export function isSignedIn({ session }: ListAccessArgs): boolean {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// Permissions check if someone meets a criteria - yes/no
export const permissions = {
  ...generatedPermissions,
  // adding custom permission
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('wes');
  },
};

// Role based permission
