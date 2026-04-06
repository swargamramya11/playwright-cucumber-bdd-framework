import { Page } from '@playwright/test';

type TestData = {
    email?: string;
    password?: string;
    firstName?: string;
};

export const pageFixture: {
    page: Page;
    data: TestData;
} = {
    page: undefined as unknown as Page,
    data: {}
};