import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.animation as animation
import random
import copy

NumOfUsers = 50 # 利用者数(1から１００)
ITERATION = 100 # 最大ループ回数　
MIN_X, MIN_Y = 0.0, 0.0 # 探索開始時の範囲最小値
MAX_X, MAX_Y = 100.0, 100.0 # 探索開始時の範囲最大値
Range = 15 #通信範囲 (範囲内に利用者が入った場合、接触と判定する)
RangeSquared = Range*Range
ProbOfLoss=0.01 #紛失する確率
MaxDisplacement = 4

StepLog = []        # 履歴情報

def initializeUsers(positions):
  #初期位置グラフ出力
  fig, ax0 = plt.subplots()
  ax0.set_xlim([MIN_X,MAX_X])
  ax0.set_ylim([MIN_Y,MAX_Y])
  ax0.set_xlabel("x")
  ax0.set_ylabel("y")
  ax0.set_title("Initial Position (NumOfUsers:{})".format(NumOfUsers))
  #初期位置設定
  for i in range(0, NumOfUsers):
    x = int(random.uniform(MIN_X, MAX_X))
    y = int(random.uniform(MIN_Y, MAX_Y))
    positions.append({"x": x, "y": y, "lost": 0, "communicated":0})
    #散布図
    plt.scatter(positions[i]["x"],positions[i]["y"],color="blue")
  fig.savefig("/content/drive/MyDrive/Lab/img/InitialPositions/InitialPosition_NumOfUsers:{}.png".format(NumOfUsers))
  #print(positions)

# 利用者の位置更新関数(更新のみする)　
# UserPositionsの要素の構造
#  ({int ,"x": int, "y": int, "lost": int,"communicated": int})
# lost は一旦1になったらそのままにしてある
# communicated は近接範囲に入った時だけ 1


def updatePosition(userPositions):
  # 位置の更新（上書き）
  for i in range(0, NumOfUsers):
    x=userPositions[i]['x']
    y=userPositions[i]['y']
    vx = MaxDisplacement * random.uniform(-1, 1)
    vy = MaxDisplacement * random.uniform(-1, 1)
    new_x = x + vx
    new_y = y + vy
    new_x = min(new_x, MAX_X)
    new_y = min(new_y, MAX_Y)
    new_x = max(new_x, MIN_X)
    new_y = max(new_y, MIN_Y)
    userPositions[i]['x']  = int(new_x) #　int型にキャスト
    userPositions[i]['y']  = int(new_y) #　int型にキャスト

def checkVicinity(userPositions):
  # communicated のクリア
  for i in range(0, NumOfUsers):
    userPositions[i]["communicated"] = 0
  #　近接判定を行う
  for i in range(0, NumOfUsers):
    xi=userPositions[i]['x']
    yi=userPositions[i]['y']
    ci=userPositions[i]["lost"]

    for j in range(i+1, NumOfUsers):
      xj=userPositions[j]['x']
      yj=userPositions[j]['y']
      cj=userPositions[j]["lost"]

      dist2 = (xi-xj)**2 + (yi-yj)**2
      if ( dist2 < RangeSquared ):
        if ci == 1 and cj == 0:
          userPositions[i]["lost"] = 1
          userPositions[i]["communicated"] = 1
          userPositions[j]["communicated"] = 1
        elif cj == 1 and ci == 0:
          userPositions[j]["lost"] = 1
          userPositions[j]["communicated"] = 1
          userPositions[i]["communicated"] = 1


def updateLoss(userPositions):
  # 一定の確率 ProbOfLoss で紛失させる
  for i in range(0, NumOfUsers):
      lost=userPositions[i]['lost']
      # 手元にある場合(lost=0)：確率pで紛失する
      if lost == 0:
        if random.uniform(0,1) < ProbOfLoss:
          userPositions[i]['lost']  = 1   


def recordLog(step, userPositions):
  global StepLog
  StepLog.append(copy.deepcopy(userPositions))

def outputPositions(userPositions):
  for user in range(0, NumOfUsers):
    print(" User:"+ str(user)+ ",")
    print(userPositions[user])

def outputLog(maxstep):
  global StepLog
  #ステップごとの全利用者の位置座標を出力
  for step in range(0, maxstep):
    print("Step:"+ str(step))
    userPositions = StepLog[step]
    outputPositions(userPositions)

def drawGraph(maxstep):
  fig, ax1 = plt.subplots()
  ax1.set_xlim([MIN_X,MAX_X])
  ax1.set_ylim([MIN_Y,MAX_Y])
  ax1.set_xlabel("x")
  ax1.set_ylabel("y")

  for user in range(0, NumOfUsers):
    xlist = []
    ylist = []
    for step in range(0, maxstep):
      userPosition = StepLog[step][user]
      x = userPosition["x"]
      y = userPosition["y"]
      lost = userPosition["lost"]
      communicated = userPosition["communicated"]
      color = ("blue", "red")[lost==1] # lost 状態だと赤色
      marker = (".", "s")[communicated==1] # communicated した時は正方形のマーカー

      xlist.append(x)
      ylist.append(y)
      if step == 0:
        plt.text(x,y, str(user), fontsize=16) # ユーザ番号
      else:
        # マーカー
        plt.plot(x,y,
                color = color,
                marker = marker)
        
    # 線を描く
    plt.plot(xlist, ylist, marker=" ")

  plt.show()

def main():
  userPositions = []  #現時点のユーザ位置

  initializeUsers(userPositions)
  #outputPositions(userPositions)
  for step in range(0,ITERATION):
    updatePosition(userPositions) # 位置を更新
    checkVicinity(userPositions)  # 近接をチェックして communicated を更新
    updateLoss(userPositions)     # 紛失 lost を更新
    recordLog(step, userPositions)      # 状態を記録

  outputLog(ITERATION) # 記録した状態を出力
  drawGraph(ITERATION)    
    
if __name__ == '__main__':
  main()   
  