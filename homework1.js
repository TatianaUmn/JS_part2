/* ������� 1
��� ������ const arr = [1, 5, 7, 9] � ������� Math.min � spread ���������, ����� ����������� ����� � �������, ������� ������� ������ �������� �� ����� ������.*/

const arr = [1, 5, 7, 9];
const min = Math.min(...arr);

console.log(min);


/* ������� 2
�������� ������� createCounter, ������� ������� ������� � ���������� ������ � ����� ��������: increment � decrement. ����� increment ������ ����������� �������� �������� �� 1, � ����� decrement ������ ��������� �������� �������� �� 1. �������� �������� ������ ���� �������� ������ ����� ������ �������, � �� ��������.*/

function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
        },
      decrement: function() {
        count--;
        },
      getCount: function() {
        return count;
        }
    };
}

const counter = createCounter();
counter.increment(); 
console.log(counter.getCount()); 
counter.decrement(); 
console.log(counter.getCount()); 


/* ������� 3
������� �������, ������� ����� �������� ��������� ����� � �������������� ��������:
// ������� ������ �������
console.log(factorial(5)); // ������� 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // ������� 1 (�� ����������� ����������) */

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(6));
