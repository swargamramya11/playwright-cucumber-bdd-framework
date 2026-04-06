import { Given, When, Then } from '@cucumber/cucumber';
import { ProductsListPage } from '../../pages/ProductsListPage';
import { pageFixture } from '../../hooks/pageFixtures';
import { DataProvider } from '../../helper/utils/dataproviders';

Given('Get products list and print in excel sheet', async function () {
    let productsListPage = new ProductsListPage(pageFixture.page)

    let data: any[] = await productsListPage.getProductsList()
    console.log(data)
    DataProvider.writeDataToXLSX('testdata/ProductsList.xlsx', 'Products', data)
});  