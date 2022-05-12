import { ReactNode } from 'react';

export type TypePageProps = {
  id: string;
  children?: ReactNode;
}

export type TypeParams = {
  params: {
    id: string;
  }
};