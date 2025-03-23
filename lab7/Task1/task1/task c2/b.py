a = int(input())
s = 10000000
i = 2

while i <= a:
    if a % i == 0 & i < s:
        s = i
        break
    i += 1
print(s) 