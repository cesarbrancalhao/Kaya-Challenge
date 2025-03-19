from django.db import models as m

RACA = [('E', 'Elfos'),
        ('A', 'Anões'),
        ('H', 'Homens'),
        ('S', 'Sauron')]

class Doctor(m.Model):
    nome = m.CharField(max_length=100)
    # todo
    imagem = m.URLField(max_length=2000)
    dataCriacao = m.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome