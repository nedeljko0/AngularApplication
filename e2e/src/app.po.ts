import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('home');
  }
  getTitle() {
    return element(by.css('app-root h3')).getText();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }

  navigateToPage(route) {
    return browser.get(route);
  }
}

export class BucketList {
  getButton() {
    return element(by.css('#createBucket'));
  }
  getBucketID(id) {
    return element(by.css('#' + id));
  }
  getBucketName() {
    return element(by.css('.bucketname')).getText();
  }
  checkIfExists(id) {
    return element.all(by.css('#' + id)).count();
  }

  getRow() {
    return element(by.css('#bucketname'));
  }

  getTitle() {
    //return element(by.css('.bucket-title'));
    return element
      .all(by.css('.bucket-title'))
      .first()
      .getText();
  }
  getFile() {
    return element(by.css('.filename'));
  }

  getTab(num) {
    return element(by.css('.bucket-tab'));
  }
  getRemoveButton() {
    return element(by.css('app-bucket-files-list .deleteBtn'));
  }
}

export class BucketForm {
  getWrapper() {
    return element(by.css('#form'));
  }
  getForm() {
    return {
      form: element(by.css('app-bucket-create form')),
      input: element(by.css('app-bucket-create input[type="text"]')),
      select: element(by.css('app-bucket-create select')),
      options: element.all(by.css('app-bucket-create option')).first(),
      submit: element(by.css('app-bucket-create button[type="submit"]')),
      col: element(by.css('.col-sm-6'))
    };
  }
}

export class BucketFilePage {
  getFile() {
    return element
      .all(by.css('app-bucket-files-list input[type="file"]'))
      .first();
  }
  getRemoveButton() {
    return element(by.css('app-bucket-details .btn-danger'));
  }
  getTitle() {
    return element(by.css('app-bucket-details h3')).getText();
  }
}

export class Modal {
  openmodal() {
    return element(by.css('#dangerBtn'));
  }
  confirm() {
    return element(by.css('#deleteButton'));
  }
}
