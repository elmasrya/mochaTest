/* global describe, it */

(function () {
  'use strict';

    describe('A Cat Object', function(){

      describe('Cat Creation', function(){

        it('should be an instance of Cat', function(){

          var cat1= new Cat();
          expect(cat1).to.be.an.instanceof(Cat);
          });

        it('should have a default color', function(){

          var cat1= new Cat();
          expect(cat1.color).to.equal('brown');
          });


        it('should overwrite color', function(){

          var cat1= new Cat({color:'gray'});
          expect(cat1.color).to.equal('gray');
          });


        it('should have status', function(){

          var cat1= new Cat();
          expect(cat1).to.have.property('status');
          });

        it('should be grumpy', function(){

          var cat1= new Cat();
          expect(cat1.status).to.equal('grumpy');
          });



      });

    });
})();
