from AdvinheNumeroDef import gg as advinhenumero
from ForcaDef import gg as forca
from PedraPapelTesouraDef import gg as PedraPapelTesoura

jogos = (advinhenumero, forca, PedraPapelTesoura)

selecionado = int(input("""Selecione o jogo que deseja:
      [1] Advinhe o número
      [2] Forca
      [3] Pedra Papel Tesoura
      """))-1

jogos[selecionado]()