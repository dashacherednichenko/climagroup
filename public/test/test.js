/**
 * Created by dashacherednichenko on 30.04.17.
 */
// App.controller('testCtrl', function ($scope, $http) {
    console.log(QUnit)
// })

QUnit.test ("рахуємо загальну суму замовлення викликом сервісу service.getSum", function (assert) {
    assert.equal(getSum(4,5,6), 15, "нуль=нулю")
})