def squareNumber(number):
    print(number * number)

def square(numbers, function):
    for number in numbers:
        function(number)

array = [1, 2, 3, 4, 5, 6]
square(array,squareNumber)