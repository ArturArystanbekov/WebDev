v = int(input())
t = int(input())

if v > 0:
    s = abs(109 - (v * t)) 
else:
    s = 109 + (v * t)

print(s)