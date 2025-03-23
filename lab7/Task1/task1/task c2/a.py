import math

a = int(input())
i = 0
s = 0
while i <= a:
    s = math.sqrt(i)
    if s % 1 == 0:
        print(i)
    i += 1