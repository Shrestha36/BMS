const mergeSortdArray = (a,b) => {
	for(var i=0;i<b.length;i++){
		a.push(b[i]);
	}
	//console.log(a);
for(let i=0;i<a.length;i++)
    {
        for(let j=i+1;j<a.length;j++)
        {
            if(a[i]>a[j])
            {
                let temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}
export default mergeSortdArray