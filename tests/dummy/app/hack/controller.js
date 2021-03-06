import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  sharingService: service('sharing-service'),
  itemId: '86c14c971d864b7887c89e3cd39f94b1', // Collisions Data Indicator for Development
  groupId: '5a55a1dc809741a698df35f97106e3bc', // DEVEXT AAA Test Sharing
  owner: 'dcadmin',
  currentUser: reads('session.currentUser.username'),
  actions: {
    shareItem () {
      const svc = this.get('sharingService');
      return svc.shareWithGroup(this.get('owner'), this.get('itemId'), this.get('groupId'))
      .then((response) => {
        this.set('sharingResponse', JSON.stringify(response, null, 4));
      })
      .catch((err) => {
        this.set('sharingResponse', JSON.stringify(err, null, 4));
      });
    },
    unShareItem () {
      const svc = this.get('sharingService');
      return svc.unShareWithGroup(this.get('owner'), this.get('itemId'), this.get('groupId'))
      .then((response) => {
        this.set('sharingResponse', JSON.stringify(response, null, 4));
      })
      .catch((err) => {
        this.set('sharingResponse', JSON.stringify(err, null, 4));
      });
    }
  }

});
