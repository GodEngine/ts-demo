# 方便设置环境变量，不想在npm script中出现多句cross-env XXX
# Usage:
# sh tasks/shipit.sh <environment> <command>

dev="development";
pro="production";
deploy="deploy";
roll="rollback";

case $1 in
  $dev|$pro) ;;
  *) echo "environment [$1] is not valid, make sure in [$dev, $pro]";
     exit 1;
     ;;
esac

case $2 in
  $deploy|$roll) ;;
  *) echo "command [$2] is not valid, make sure in [$deploy, $roll]";
     exit 1;
     ;;
esac

cross-env TS_NODE_PROJECT=tsconfig-for-shipit.json shipit $1 $2