#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Poyezd {
public:
    Poyezd(string nomi, string uzunligi, float tezligi) {
        this->nomi = nomi;
        this->uzunligi = uzunligi;
        this->tezligi = tezligi;
    }
    string nomi;
    string uzunligi;
    float tezligi;
};

bool taqqoslash(Poyezd p1, Poyezd p2)
{
    string satr1 = p1.uzunligi;
    string satr2 = p2.uzunligi;

    int n1 = satr1.length(), n2 = satr2.length();
    if (n1 < n2)
        return true;
    if (n2 < n1)
        return false;

    for (int i = 0; i < n1; i++)
    {
        if (satr1[i] < satr2[i])
            return true;
        if (satr1[i] > satr2[i])
            return false;
    } return false;
}




int main()
{
    Poyezd p1("Afrosiyob1", "30032001231123090", 270);
    Poyezd p2("Afrosiyob2", "30034643433553534", 340);
    Poyezd p3("Afrosiyob3", "30031984335354326", 330);
    Poyezd p4("Afrosiyob4", "31234353543534546", 270);
    Poyezd p5("Afrosiyob5", "53434543435434344", 150);
    Poyezd p6("Afrosiyob6", "54645343543445353", 350);
    Poyezd p7("Afrosiyob7", "34223433343534343", 170);

    vector<Poyezd> poyezdlar = { p1,p2,p3,p4,p5,p6,p7 };
    sort(poyezdlar.begin(), poyezdlar.end(), taqqoslash);


    for (auto i : poyezdlar) {
        cout << i.nomi << endl;
    }

    system("pause");
}