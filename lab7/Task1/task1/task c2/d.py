a = int(input())
i = 0
s = 0
while i <= a:
    if 2 ** i == a:
        s += 1
    i += 1
if s > 0:
    print("yes")
else: 
    print("no")