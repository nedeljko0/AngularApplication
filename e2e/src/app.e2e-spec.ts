import {
  AppPage,
  BucketList,
  BucketForm,
  BucketFilePage,
  Modal
} from './app.po';
import { browser, element, by } from 'protractor';
import {} from 'protractor';

let bucketData: any;
let fileObject: any;

//BUCKET LIST PAGE
describe('Bucket list page', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display bucket list title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Bucket List');
  });

  describe('Open form', () => {
    let bucketList: BucketList;
    let bucketForm: BucketForm;
    let form: any;
    let bucketElement: any;
    beforeEach(() => {
      bucketForm = new BucketForm();
      bucketList = new BucketList();
      form = bucketForm.getForm();
      bucketData = {
        name: 'e2e test ',
        id: 'test',
        location: {
          name: form.options.getText(),
          id: form.options.getAttribute('value')
        }
      };
    });

    it('should open form on click', () => {
      let button = bucketList.getButton();
      //expect(button.isPresent()).toBeFalsy();
      let wrapper = bucketList.getBucketID('form');
      button.click();

      expect(wrapper.getAttribute('class')).toEqual(
        'form ng-untouched ng-pristine ng-invalid'
      );
    });
    it('submit button should be disabled', () => {
      expect(form.submit.getAttribute('disabled')).toBeTruthy();
    });
    it('form should be disabled and untouched', () => {
      let classes = form.form.getAttribute('class');
      expect(classes).toBe('form ng-untouched ng-pristine ng-invalid');
    });
    it('submit button should be enabled when form is filled', () => {
      form.options.getAttribute('value').click();
      form.input.sendKeys(bucketData.name);
      expect(form.submit.getAttribute('disabled')).toBeTruthy();
    });
    it('should create new bucket when submit bucket is clicked', () => {
      form.submit.click();
      bucketElement = bucketList.getBucketID(bucketData.id);
      expect(bucketElement).toBeTruthy();
    });

    describe('Redirect after creating bucket', () => {
      it('should redirect', () => {
        let currentUrl = page.getUrl();
        page.navigateToPage('bucket-files-list/' + bucketData.id);
        expect(currentUrl == page.getUrl()).toBeFalsy();
      });
    });
  });
});

//BUCKET FILES/DETAILS PAGE
describe('Bucket page', () => {
  let bucketPage: BucketList;
  let page: AppPage;
  beforeEach(() => {
    bucketPage = new BucketList();
  });

  //BUCKET FILES
  describe('Upload file button', () => {
    let fileForm: BucketFilePage;
    beforeEach(() => {
      page = new AppPage();
      bucketPage = new BucketList();
      fileForm = new BucketFilePage();
    });

    it('should upload picture', () => {
      var path = require('path');
      let file = fileForm.getFile();
      let fileToUpload = 'panda.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
      file.sendKeys(absolutePath);
      fileObject = bucketPage.getFile();
      expect(fileObject).toBeTruthy();
    });
  });

  describe('remove file button', () => {
    let modal: Modal;
    beforeEach(() => {
      modal = new Modal();
      bucketPage = new BucketList();
    });

    it('enable remove button when file is clicked', () => {
      let button = bucketPage.getRemoveButton();
      expect(button.getAttribute('disabled')).toBeTruthy();
      fileObject.click();
      expect(button.getAttribute('disabled')).toBeFalsy();
    });
  });

  describe('redirect to details page', () => {
    it('should redirect', () => {
      let currentUrl = page.getUrl();
      page.navigateToPage('bucket-details/' + bucketData.id);
      expect(currentUrl == page.getUrl()).toBeFalsy();
    });
  });

  //BUCKET DETAILS
  describe('Bucket details page', () => {
    let modal: Modal;
    let bucketList: BucketList;
    beforeEach(() => {
      page = new AppPage();
      modal = new Modal();
      bucketList = new BucketList();
    });

    it('should click on remove bucket button, click confirm in modal, navigate to bucket list page', () => {
      let currentUrl = page.getUrl();
      let openit = modal.openmodal();
      openit.click();
      let confirm = modal.confirm();
      confirm.click();
      expect(currentUrl == page.getUrl()).toBeFalsy();
    });
  });
});
