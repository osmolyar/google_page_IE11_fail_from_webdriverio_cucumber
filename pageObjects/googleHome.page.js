import GoogleResultsPage  from './/googleResults.page';

class HomePage  {
    get searchForm() {return $('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input')};
    get searchBtn() {return $('//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[1]')};
    get loginButton() {return $('[name=IRISLogin]');}

    constructor(validate=false) {
        if (validate===true)
            this.validatePageOpen();
    }

   getPage(url) {
     browser.url(url)
     return this;
   };

    dragAndDropWdio() {
        $('div.gb_h:nth-child(1) > a:nth-child(1)').dragAndDrop($('.gLFyf'))
    }

    clickSearch(Search='') {
        this.element.click(this.map.searchBtn);
        return new GoogleResultsPage(true);
    };
    
   search(Search='') {
       this.element.setValue(this.map.searchForm,Search);
       this.element.click(this.map.searchBtn);
       return new GoogleResultsPage(true);
   };

    getLucky(Search='') {
        this.element.setValue(this.map.searchForm,Search);
        this.element.click(this.map.iFeelLuckyBtn);
        return new GoogleResultsPage(true);
    };

   validatePageOpen() {
       assert.equal(browser.getTitle(), 'Google');
   };

}
export default HomePage;
