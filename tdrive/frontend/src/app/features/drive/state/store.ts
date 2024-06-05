import { atomFamily, atom } from 'recoil';
import { BrowsePaginate, BrowseSort, DriveItem, DriveItemDetails } from '../types';

export const DriveItemChildrenAtom = atomFamily<DriveItem[], string>({
  key: 'DriveItemChildrenAtom',
  default: () => [],
});

export const DriveItemAtom = atomFamily<Partial<DriveItemDetails> | null, string>({
  key: 'DriveItemAtom',
  default: () => null,
});

export const DriveItemSelectedList = atom<{[key: string]: boolean }>({
  key: 'DriveItemSelectedList',
  default: {}
});

export const DriveItemSort = atom<BrowseSort>({
  key: 'DriveItemSort',
  default: {
    by: 'name',
    order: 'asc',
  },
});

export const DriveItemPagination = atom<BrowsePaginate>({
  key: 'DriveItemPagination',
  default: {
    page: 1,
    limit: 15,
  },
});
