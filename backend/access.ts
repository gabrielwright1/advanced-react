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

// Custom permissions (example)
// Check if someone meets a criteria - yes/no
export const permissions = {
  ...generatedPermissions,
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('wes');
  },
};

// Rule based functions
// Rules can return a boolean - yes/no - or a filter which limits which products can return CRUD
export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
  },
  canOrder({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2. Otherwise, use the 'where' clause
    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2. Otherwise, use the 'where' clause
    return { order: { user: { id: session.itemId } } };
  },
  canReadProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2. Otherwise, use the 'where' clause
    return { status: 'AVAILABLE' };
  },
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // 2. Otherwise, they may only update themselves
    return { id: session.itemId };
  },
};
