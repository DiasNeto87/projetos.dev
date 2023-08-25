# Aula 01 - Iury Rosal


print("Seja muito bem vindo ao quiz!")
answer_user = input("Quer começar? (S/N)")
if answer_user != "S":
    quit()
score = 0


print("começando...")

print("Qual é o melhor meia da america do sul atualmente? \n (A) Arrascaeta \n (B) Everton Ribeiro")
answer_1 = input("resposta: ")

if answer_1 == "A":
    print("correto!")
    score = score + 1
else:
    print("Incorreto!")

print("Qual é o melhor time do BR? \n (A) Flamengo titular \n (B) Flamengo reserva")
answer_2 = input("resposta: ")

if answer_2 == "A":
    print("correto!")
    score = score + 1
else:
    print("Incorreto!")

print("O palmeiras tem mundial? \n (A) Sim \n (B) Não")
answer_3 = input("resposta: ")

if answer_3 == "B":
    print("correto!")
    score = score + 1
else:
    print("Incorreto!")


print(f"Quiz acabou...Pontuação: {score}/3") 

#a letra f permite colocar o score dentro do print

