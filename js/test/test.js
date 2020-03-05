import {testTask1} from './test_task1.js';
import {testTask2} from './test_task2.js';
import {testTask3} from './test_task3.js';
import {testTask4} from './test_task4.js';
import {testTask5} from './test_task5.js';
import {testTask6} from './test_task6.js';
import {testTask7} from './test_task7.js';


mocha.setup('bdd');

const ass = chai.assert;

testTask1(ass);
testTask2(ass);
testTask3(ass);
testTask4(ass);
testTask5(ass);
testTask6(ass);
testTask7(ass);

mocha.run();