(
  function () {
    'use strict';
    angular.module("Assignment2", [])
    .controller("ToBuyListController", ToBuyListController)
    .controller("BoughtListController", BoughtListController)
    .provider("buyService", BuyServiceProvider);

    ToBuyListController.$inject = ['buyService'];
    BoughtListController.$inject = ['buyService'];

    function ToBuyListController(buyService) {
      this.toBuyItemsList = buyService.getToBuyItems();

      this.BuyItem = function (itemIndex) {
        var noItems = buyService.buyItem(itemIndex);
        if(noItems == true) {
          this.noItemsMsg = "Everything is bought!";
        }
      };
    }

    function BoughtListController(buyService) {
      this.boughtItemsList = buyService.getBoughtItems();
      this.noItemsMsg = "Nothing bought yet.";
    }

    function buyService() {
      var toBuyItems = [
        {
          name: "Biscuits",
          quantity: 5
        },
        {
          name: "Apple",
          quantity: 10
        },
        {
          name: "Choclates",
          quantity: 15
        },
        {
          name: "Mobile",
          quantity: 2
        },
        {
          name: "Gift Card",
          quantity: 5
        },
      ];

      var boughtItems = [];

      this.buyItem = function (itemIndex) {
        var item = toBuyItems[itemIndex];
        boughtItems.push(item);
        toBuyItems.splice(itemIndex, 1);
        if(toBuyItems.length == 0) {
          return true;
        }
      }

      this.getToBuyItems = function () {
        return toBuyItems;
      }

      this.getBoughtItems = function () {
        return boughtItems;
      }
    }

    function BuyServiceProvider() {
      this.$get = function (){
        return new buyService();
      };
    }
  }
)();
