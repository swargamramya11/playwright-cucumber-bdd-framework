import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../utils/world';
import { DataProvider } from '../../../src/utils/dataproviders';

Given('Get products list and print in excel sheet', async function (this: CustomWorld) {
    let data: any[] = await this.productsListPage.getProductsList()
    console.log(data)
    DataProvider.writeDataToXLSX('src/resources/testdata/uitestdata/ProductsList.xlsx', 'Products', data)
});  